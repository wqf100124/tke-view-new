# MAXKB开发环境



构建镜像
```shell
docker build -t registry.cn-hangzhou.aliyuncs.com/tke-view/view:maxkb-alpine .
```

```
docker run -it --name maxkb -v ~/web/app/ai/MaxKB-main:/opt/maxkb -p 8000:8000 python:3.11-alpine sh
docker run -it --name maxkb-dev -v ~/web/app/ai/MaxKB-main:/opt/maxkb -p 8000:8000 registry.cn-hangzhou.aliyuncs.com/tke-view/view:maxkb bash
```

创建 docker-compose.yaml 文件
```yaml
services:
  maxkb:
    image: cr2.fit2cloud.com/1panel/maxkb
    container_name: maxkb
    ports:
      - "8080:8080"
    volumes:
      - ~/web/app/ai/maxkb/app:/opt/maxkb/app
    detach: true
    
  code:
    container_name: maxkb-code
    image: registry.cn-hangzhou.aliyuncs.com/tke-view/view:maxkb
    ports:
      - "8000:8000"
    volumes:
      - ~/web/app/ai/maxkb/app:/opt/code
```

```shell
docker run -d --name=maxkb-code -p 8000:8000 -v ~/web/app/ai/maxkb/app:/opt/code registry.cn-hangzhou.aliyuncs.com/tke-view/view:maxkb
```

```shell
docker compose up -d
```



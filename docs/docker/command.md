# 常用命令

## 拉取镜像
```shell
docker pull <image name>
```

## 查看镜像列表
```shell
docker images
```

## 删除镜像
```shell
docker rmi <image ID>
```

## 容器的运行/停止/删除
```shell
docker {start|stop|rm} <container ID>
```

## 列出正在运行的容器
```shell
docker ps
```

## 进入容器
```shell
docker exec -it <container ID> bash
```

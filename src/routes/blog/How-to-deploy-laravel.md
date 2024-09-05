---
title: How to deploy a Laravel application
author: Djelal Fida
date: 2022-10-10
cover: https://lorisleiva.com/assets/articles/2021/0405-deployer-series/cover.jpg
description: How to deploy a Laravel application
tags: laravel php deploy linux
visible: true
---

# Step 1: Install Composer

`Composer` is a dependency manager for PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.

## Install dependencies

```bash
 $ sudo apt-get update
 $ sudo apt-get install php-cli unzip
```

## Download the installer

```bash
 $ cd ~
 $ curl -sS https://getcomposer.org/installer -o composer-setup.php
```

## Verify the installer

```bash
 $ HASH=`curl -sS https://composer.github.io/installer.sig`
 $ php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

### Output

```bash
Installer verified
```

> If you get the message `Installer corrupt` then delete the `composer-setup.php` file and try again.

# Install Composer

```bash
 $ sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

## Test the installation

```bash
 $ composer --version
```

# Step 2: Install PHP

## Installing dependencies

```bash
 $ sudo apt update
 $ sudo apt install -y lsb-release ca-certificates apt-transport-https software-properties-common gnupg2
```

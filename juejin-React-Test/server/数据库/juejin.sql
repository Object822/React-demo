/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : juejin

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-10-12 17:07:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for art_stat
-- ----------------------------
DROP TABLE IF EXISTS `art_stat`;
CREATE TABLE `art_stat` (
  `tid` int(11) NOT NULL COMMENT '文章id',
  `read_count` int(11) DEFAULT NULL COMMENT '文章点击数',
  `upvote` int(11) DEFAULT NULL COMMENT '点赞数',
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of art_stat
-- ----------------------------

-- ----------------------------
-- Table structure for blogs
-- ----------------------------
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs` (
  `tid` int(11) NOT NULL AUTO_INCREMENT COMMENT '	文章id',
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT '	文章类型（原创、转载）',
  `loadURL` varchar(255) DEFAULT NULL COMMENT '转载地址',
  `label` varchar(255) DEFAULT NULL COMMENT '文章标签',
  `decoration` varchar(255) DEFAULT NULL COMMENT '	文章描述信息',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `alter_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `state` int(11) DEFAULT NULL COMMENT '文章状态（未审核、保存、审核通过）',
  `content` text COMMENT '文章内容',
  `comments` int(11) DEFAULT NULL COMMENT '评论数',
  `star` int(11) DEFAULT NULL COMMENT '红星数',
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blogs
-- ----------------------------

-- ----------------------------
-- Table structure for response1
-- ----------------------------
DROP TABLE IF EXISTS `response1`;
CREATE TABLE `response1` (
  `post_id` int(11) NOT NULL COMMENT '回复id',
  `user_id` int(11) DEFAULT NULL COMMENT '	用户id',
  `tid` int(11) DEFAULT NULL COMMENT '文章ID（外键）',
  `text` varchar(255) DEFAULT NULL,
  `respond` int(11) DEFAULT NULL COMMENT '	二级回复ID（值唯一）',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of response1
-- ----------------------------

-- ----------------------------
-- Table structure for response2
-- ----------------------------
DROP TABLE IF EXISTS `response2`;
CREATE TABLE `response2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `respond` int(11) DEFAULT NULL COMMENT '二级回复ID',
  `user_id` int(11) DEFAULT NULL COMMENT '	用户ID（外键）',
  `text` varchar(255) DEFAULT NULL COMMENT '回复消息',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of response2
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '用户密码',
  `question` varchar(255) DEFAULT NULL COMMENT '密保问题',
  `answer` varchar(255) DEFAULT NULL COMMENT '	密保答案',
  `user_Img` varchar(255) DEFAULT NULL COMMENT '	用户图片',
  `regtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------

-- ----------------------------
-- Table structure for users_info
-- ----------------------------
DROP TABLE IF EXISTS `users_info`;
CREATE TABLE `users_info` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users_info
-- ----------------------------

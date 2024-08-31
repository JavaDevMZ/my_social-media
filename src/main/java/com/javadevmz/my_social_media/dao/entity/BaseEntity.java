package com.javadevmz.my_social_media.dao.entity;

import java.io.Serializable;

public interface BaseEntity<ID extends Serializable> {
    ID getId();
    void setId(ID id);
}

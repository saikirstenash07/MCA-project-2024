package com.spbank.bankbackendjwt1.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class UserInfo {
    @Id
    @Column(name="userinfo_id")
    private Long id ;


    private  String mobileNo ;


    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user ;

    public UserInfo(String mobileNo) {
        this.mobileNo = mobileNo;
    }
}

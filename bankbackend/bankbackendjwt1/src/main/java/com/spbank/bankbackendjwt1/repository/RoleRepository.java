package com.spbank.bankbackendjwt1.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spbank.bankbackendjwt1.model.ERole;
import com.spbank.bankbackendjwt1.model.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}

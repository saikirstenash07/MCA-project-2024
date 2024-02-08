package com.spbank.bankbackendjwt1.repository;

import java.util.List;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spbank.bankbackendjwt1.model.Loans;






@Repository
public interface LoanRepository extends CrudRepository<Loans, Long> {
	
	List<Loans> findByUserIdOrderByStartDtDesc(Long customerId);

}

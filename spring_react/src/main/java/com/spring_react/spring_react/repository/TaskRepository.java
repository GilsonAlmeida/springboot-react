package com.spring_react.spring_react.repository;

import com.spring_react.spring_react.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository  extends JpaRepository<Task,Long> {

}

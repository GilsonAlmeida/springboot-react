package com.spring_react.spring_react.controller;

import com.spring_react.spring_react.model.Task;

import org.springframework.web.bind.annotation.*;

import com.spring_react.spring_react.repository.TaskRepository;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    private TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @PostMapping
    public void create(@RequestBody Task task) {
        taskRepository.save(task);
    }
    @GetMapping
    @ResponseBody
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void delete (@PathVariable Long id) {
        taskRepository.deleteById(id);
    }

}

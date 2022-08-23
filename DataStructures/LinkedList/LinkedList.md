# LinkedList

- Each node has `value` and `next` property
- Each Linked list has `Head` and `Tail` identifier
- LinkedList Methods
  - push(value) - Big O: O(1) (aka Append)
  - pop() - Big O: O(n)
    - iterated using while loop, prev node and temp node
  - unshift(value) - Big O: O(1)  (aka Prepend)
  - shift() - Big O: O(1)
  - get(index) - Big O: O(n)
  - set(index) - Big O: O(n)
  - insert(index, value) - Big O: O(n)
  - remove(index) - Big O: O(n)
  - reverse() - Big O: O(n)
    - iterated using while loop, prev node, temp node and next node
Note: when ever we iterate through a linked list we need at least on temp

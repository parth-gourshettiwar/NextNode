import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Copy, Download, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

export default function CodePage() {
  const [language, setLanguage] = useState('cpp');
  const [listType, setListType] = useState('singly');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    cpp: {
      singly: `// Singly Linked List Implementation in C++
#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;
    
    Node(int val) : data(val), next(nullptr) {}
};

class SinglyLinkedList {
private:
    Node* head;
    
public:
    SinglyLinkedList() : head(nullptr) {}
    
    // Insert at the beginning
    void insertAtStart(int data) {
        Node* newNode = new Node(data);
        newNode->next = head;
        head = newNode;
        cout << "Inserted " << data << " at start\\n";
    }
    
    // Insert at the end
    void insertAtEnd(int data) {
        Node* newNode = new Node(data);
        if (head == nullptr) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->next = newNode;
        cout << "Inserted " << data << " at end\\n";
    }
    
    // Insert after a specific key
    void insertAfter(int key, int data) {
        Node* temp = head;
        while (temp != nullptr && temp->data != key) {
            temp = temp->next;
        }
        if (temp == nullptr) {
            cout << "Key not found\\n";
            return;
        }
        Node* newNode = new Node(data);
        newNode->next = temp->next;
        temp->next = newNode;
        cout << "Inserted " << data << " after " << key << "\\n";
    }
    
    // Delete from the beginning
    void deleteAtStart() {
        if (head == nullptr) {
            cout << "List is empty\\n";
            return;
        }
        Node* temp = head;
        head = head->next;
        delete temp;
        cout << "Deleted node from start\\n";
    }
    
    // Delete from the end
    void deleteAtEnd() {
        if (head == nullptr) {
            cout << "List is empty\\n";
            return;
        }
        if (head->next == nullptr) {
            delete head;
            head = nullptr;
            return;
        }
        Node* temp = head;
        while (temp->next->next != nullptr) {
            temp = temp->next;
        }
        delete temp->next;
        temp->next = nullptr;
        cout << "Deleted node from end\\n";
    }
    
    // Delete by key
    void deleteByKey(int key) {
        if (head == nullptr) {
            cout << "List is empty\\n";
            return;
        }
        if (head->data == key) {
            Node* temp = head;
            head = head->next;
            delete temp;
            cout << "Deleted node with key " << key << "\\n";
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr && temp->next->data != key) {
            temp = temp->next;
        }
        if (temp->next == nullptr) {
            cout << "Key not found\\n";
            return;
        }
        Node* nodeToDelete = temp->next;
        temp->next = temp->next->next;
        delete nodeToDelete;
        cout << "Deleted node with key " << key << "\\n";
    }
    
    // Search for a node
    bool search(int key) {
        Node* temp = head;
        int position = 1;
        while (temp != nullptr) {
            if (temp->data == key) {
                cout << "Found " << key << " at position " << position << "\\n";
                return true;
            }
            temp = temp->next;
            position++;
        }
        cout << "Key " << key << " not found\\n";
        return false;
    }
    
    // Display the list
    void display() {
        if (head == nullptr) {
            cout << "List is empty\\n";
            return;
        }
        Node* temp = head;
        cout << "List: ";
        while (temp != nullptr) {
            cout << temp->data;
            if (temp->next != nullptr) cout << " -> ";
            temp = temp->next;
        }
        cout << " -> NULL\\n";
    }
    
    // Destructor
    ~SinglyLinkedList() {
        while (head != nullptr) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }
};

int main() {
    SinglyLinkedList list;
    
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtStart(5);
    list.display();
    
    list.search(20);
    list.deleteByKey(20);
    list.display();
    
    return 0;
}`,
      doubly: `// Doubly Linked List Implementation in C++
#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* prev;
    Node* next;
    
    Node(int val) : data(val), prev(nullptr), next(nullptr) {}
};

class DoublyLinkedList {
private:
    Node* head;
    
public:
    DoublyLinkedList() : head(nullptr) {}
    
    // Insert at the beginning
    void insertAtStart(int data) {
        Node* newNode = new Node(data);
        if (head != nullptr) {
            head->prev = newNode;
        }
        newNode->next = head;
        head = newNode;
        cout << "Inserted " << data << " at start\\n";
    }
    
    // Insert at the end
    void insertAtEnd(int data) {
        Node* newNode = new Node(data);
        if (head == nullptr) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->prev = temp;
        cout << "Inserted " << data << " at end\\n";
    }
    
    // Insert after a specific key
    void insertAfter(int key, int data) {
        Node* temp = head;
        while (temp != nullptr && temp->data != key) {
            temp = temp->next;
        }
        if (temp == nullptr) {
            cout << "Key not found\\n";
            return;
        }
        Node* newNode = new Node(data);
        newNode->next = temp->next;
        newNode->prev = temp;
        if (temp->next != nullptr) {
            temp->next->prev = newNode;
        }
        temp->next = newNode;
        cout << "Inserted " << data << " after " << key << "\\n";
    }
    
    // Delete from the beginning
    void deleteAtStart() {
        if (head == nullptr) {
            cout << "List is empty\\n";
            return;
        }
        Node* temp = head;
        head = head->next;
        if (head != nullptr) {
            head->prev = nullptr;
        }
        delete temp;
        cout << "Deleted node from start\\n";
    }
    
    // Delete from the end
    void deleteAtEnd() {
        if (head == nullptr) {
            cout << "List is empty\\n";
            return;
        }
        if (head->next == nullptr) {
            delete head;
            head = nullptr;
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->prev->next = nullptr;
        delete temp;
        cout << "Deleted node from end\\n";
    }
    
    // Delete by key
    void deleteByKey(int key) {
        if (head == nullptr) {
            cout << "List is empty\\n";
            return;
        }
        Node* temp = head;
        while (temp != nullptr && temp->data != key) {
            temp = temp->next;
        }
        if (temp == nullptr) {
            cout << "Key not found\\n";
            return;
        }
        if (temp->prev != nullptr) {
            temp->prev->next = temp->next;
        } else {
            head = temp->next;
        }
        if (temp->next != nullptr) {
            temp->next->prev = temp->prev;
        }
        delete temp;
        cout << "Deleted node with key " << key << "\\n";
    }
    
    // Search for a node
    bool search(int key) {
        Node* temp = head;
        int position = 1;
        while (temp != nullptr) {
            if (temp->data == key) {
                cout << "Found " << key << " at position " << position << "\\n";
                return true;
            }
            temp = temp->next;
            position++;
        }
        cout << "Key " << key << " not found\\n";
        return false;
    }
    
    // Display the list forward
    void displayForward() {
        if (head == nullptr) {
            cout << "List is empty\\n";
            return;
        }
        Node* temp = head;
        cout << "List (Forward): NULL <-> ";
        while (temp != nullptr) {
            cout << temp->data;
            if (temp->next != nullptr) cout << " <-> ";
            temp = temp->next;
        }
        cout << " <-> NULL\\n";
    }
    
    // Destructor
    ~DoublyLinkedList() {
        while (head != nullptr) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }
};

int main() {
    DoublyLinkedList list;
    
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtStart(5);
    list.displayForward();
    
    list.search(20);
    list.deleteByKey(20);
    list.displayForward();
    
    return 0;
}`,
    },
    java: {
      singly: `// Singly Linked List Implementation in Java

class Node {
    int data;
    Node next;
    
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    private Node head;
    
    public SinglyLinkedList() {
        this.head = null;
    }
    
    // Insert at the beginning
    public void insertAtStart(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
        System.out.println("Inserted " + data + " at start");
    }
    
    // Insert at the end
    public void insertAtEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
        System.out.println("Inserted " + data + " at end");
    }
    
    // Insert after a specific key
    public void insertAfter(int key, int data) {
        Node temp = head;
        while (temp != null && temp.data != key) {
            temp = temp.next;
        }
        if (temp == null) {
            System.out.println("Key not found");
            return;
        }
        Node newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode;
        System.out.println("Inserted " + data + " after " + key);
    }
    
    // Delete from the beginning
    public void deleteAtStart() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        head = head.next;
        System.out.println("Deleted node from start");
    }
    
    // Delete from the end
    public void deleteAtEnd() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        if (head.next == null) {
            head = null;
            return;
        }
        Node temp = head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        temp.next = null;
        System.out.println("Deleted node from end");
    }
    
    // Delete by key
    public void deleteByKey(int key) {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        if (head.data == key) {
            head = head.next;
            System.out.println("Deleted node with key " + key);
            return;
        }
        Node temp = head;
        while (temp.next != null && temp.next.data != key) {
            temp = temp.next;
        }
        if (temp.next == null) {
            System.out.println("Key not found");
            return;
        }
        temp.next = temp.next.next;
        System.out.println("Deleted node with key " + key);
    }
    
    // Search for a node
    public boolean search(int key) {
        Node temp = head;
        int position = 1;
        while (temp != null) {
            if (temp.data == key) {
                System.out.println("Found " + key + " at position " + position);
                return true;
            }
            temp = temp.next;
            position++;
        }
        System.out.println("Key " + key + " not found");
        return false;
    }
    
    // Display the list
    public void display() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        Node temp = head;
        System.out.print("List: ");
        while (temp != null) {
            System.out.print(temp.data);
            if (temp.next != null) System.out.print(" -> ");
            temp = temp.next;
        }
        System.out.println(" -> NULL");
    }
    
    public static void main(String[] args) {
        SinglyLinkedList list = new SinglyLinkedList();
        
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtStart(5);
        list.display();
        
        list.search(20);
        list.deleteByKey(20);
        list.display();
    }
}`,
      doubly: `// Doubly Linked List Implementation in Java

class Node {
    int data;
    Node prev;
    Node next;
    
    Node(int data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    private Node head;
    
    public DoublyLinkedList() {
        this.head = null;
    }
    
    // Insert at the beginning
    public void insertAtStart(int data) {
        Node newNode = new Node(data);
        if (head != null) {
            head.prev = newNode;
        }
        newNode.next = head;
        head = newNode;
        System.out.println("Inserted " + data + " at start");
    }
    
    // Insert at the end
    public void insertAtEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
        System.out.println("Inserted " + data + " at end");
    }
    
    // Insert after a specific key
    public void insertAfter(int key, int data) {
        Node temp = head;
        while (temp != null && temp.data != key) {
            temp = temp.next;
        }
        if (temp == null) {
            System.out.println("Key not found");
            return;
        }
        Node newNode = new Node(data);
        newNode.next = temp.next;
        newNode.prev = temp;
        if (temp.next != null) {
            temp.next.prev = newNode;
        }
        temp.next = newNode;
        System.out.println("Inserted " + data + " after " + key);
    }
    
    // Delete from the beginning
    public void deleteAtStart() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        head = head.next;
        if (head != null) {
            head.prev = null;
        }
        System.out.println("Deleted node from start");
    }
    
    // Delete from the end
    public void deleteAtEnd() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        if (head.next == null) {
            head = null;
            return;
        }
        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.prev.next = null;
        System.out.println("Deleted node from end");
    }
    
    // Delete by key
    public void deleteByKey(int key) {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        Node temp = head;
        while (temp != null && temp.data != key) {
            temp = temp.next;
        }
        if (temp == null) {
            System.out.println("Key not found");
            return;
        }
        if (temp.prev != null) {
            temp.prev.next = temp.next;
        } else {
            head = temp.next;
        }
        if (temp.next != null) {
            temp.next.prev = temp.prev;
        }
        System.out.println("Deleted node with key " + key);
    }
    
    // Search for a node
    public boolean search(int key) {
        Node temp = head;
        int position = 1;
        while (temp != null) {
            if (temp.data == key) {
                System.out.println("Found " + key + " at position " + position);
                return true;
            }
            temp = temp.next;
            position++;
        }
        System.out.println("Key " + key + " not found");
        return false;
    }
    
    // Display the list forward
    public void displayForward() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        Node temp = head;
        System.out.print("List (Forward): NULL <-> ");
        while (temp != null) {
            System.out.print(temp.data);
            if (temp.next != null) System.out.print(" <-> ");
            temp = temp.next;
        }
        System.out.println(" <-> NULL");
    }
    
    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();
        
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtStart(5);
        list.displayForward();
        
        list.search(20);
        list.deleteByKey(20);
        list.displayForward();
    }
}`,
    },
  };

  const copyCode = () => {
    const code = codeSnippets[language as keyof typeof codeSnippets][listType as keyof typeof codeSnippets.cpp];
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCode = () => {
    const code = codeSnippets[language as keyof typeof codeSnippets][listType as keyof typeof codeSnippets.cpp];
    const extension = language === 'cpp' ? 'cpp' : 'java';
    const filename = `${listType}_linked_list.${extension}`;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`Downloaded ${filename}`);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-950 px-4 py-2 rounded-full mb-4">
            <Code2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400">Code Examples</span>
          </div>
          <h1 className="text-slate-900 dark:text-white mb-4">
            Code Implementation
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Ready-to-use linked list implementations in C++ and Java
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-6"
        >
          <div className="flex-1">
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">
              Programming Language
            </label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cpp">C++</SelectItem>
                <SelectItem value="java">Java</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">
              List Type
            </label>
            <Select value={listType} onValueChange={setListType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="singly">Singly Linked List</SelectItem>
                <SelectItem value="doubly">Doubly Linked List</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Code Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-slate-600 dark:text-slate-400">
                  {listType === 'singly' ? 'Singly' : 'Doubly'} Linked List - {language === 'cpp' ? 'C++' : 'Java'}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={copyCode}
                  className="gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={downloadCode}
                  className="gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900 overflow-x-auto">
              <pre className="text-sm text-slate-800 dark:text-slate-200">
                <code>{codeSnippets[language as keyof typeof codeSnippets][listType as keyof typeof codeSnippets.cpp]}</code>
              </pre>
            </div>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Card className="p-6 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
            <h3 className="text-slate-900 dark:text-white mb-2">
              Complete Implementation
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              All essential operations including insert, delete, and search
            </p>
          </Card>
          <Card className="p-6 bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800">
            <h3 className="text-slate-900 dark:text-white mb-2">
              Production Ready
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Well-commented, clean code following best practices
            </p>
          </Card>
          <Card className="p-6 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <h3 className="text-slate-900 dark:text-white mb-2">
              Easy to Understand
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Clear structure with descriptive variable names
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

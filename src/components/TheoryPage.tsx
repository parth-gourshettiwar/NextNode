import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ChevronRight, CheckCircle2, XCircle, ListTree, Link2, Database } from 'lucide-react';
import { Card } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export default function TheoryPage() {
  const sections = [
    {
      id: 'what-is',
      icon: Database,
      title: 'What is a Linked List?',
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300">
            A <strong>Linked List</strong> is a linear data structure where elements are stored in nodes. 
            Unlike arrays, linked list elements are not stored in contiguous memory locations. 
            Each node contains data and a reference (or link) to the next node in the sequence.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Key Concept:</strong> In a linked list, each element (node) points to the next element, 
              forming a chain-like structure. The first node is called the <em>head</em>, and the last node 
              points to <em>null</em> (or <em>None</em>).
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <pre className="text-sm text-slate-700 dark:text-slate-300">
{`Node Structure:
┌─────────┬──────┐
│  Data   │ Next │
└─────────┴──────┘
     ↓        ↓
   Value   Pointer to next node`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: 'types',
      icon: ListTree,
      title: 'Types of Linked Lists',
      content: (
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-blue-500" />
              1. Singly Linked List
            </h4>
            <p className="text-slate-600 dark:text-slate-300 ml-7">
              Each node contains data and a pointer to the next node. The last node points to null. 
              Traversal is only possible in one direction (forward).
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg ml-7">
              <pre className="text-sm text-slate-700 dark:text-slate-300">
{`Head → [10|•] → [20|•] → [30|•] → [40|null]`}
              </pre>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-purple-500" />
              2. Doubly Linked List
            </h4>
            <p className="text-slate-600 dark:text-slate-300 ml-7">
              Each node contains data, a pointer to the next node, and a pointer to the previous node. 
              Traversal is possible in both directions (forward and backward).
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg ml-7">
              <pre className="text-sm text-slate-700 dark:text-slate-300">
{`null ← [•|10|•] ⇄ [•|20|•] ⇄ [•|30|•] ⇄ [•|40|null]
       Head`}
              </pre>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-green-500" />
              3. Circular Linked List
            </h4>
            <p className="text-slate-600 dark:text-slate-300 ml-7">
              Similar to singly linked list, but the last node points back to the first node, 
              forming a circle. There is no null at the end.
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg ml-7">
              <pre className="text-sm text-slate-700 dark:text-slate-300">
{`     ┌─────────────────────────┐
     ↓                         │
Head → [10|•] → [20|•] → [30|•]┘`}
              </pre>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'advantages',
      icon: CheckCircle2,
      title: 'Advantages of Linked Lists',
      content: (
        <div className="space-y-3">
          {[
            'Dynamic size - can grow or shrink at runtime',
            'Efficient insertion and deletion at any position (O(1) if position is known)',
            'No memory wastage - memory is allocated as needed',
            'Easy implementation of stacks and queues',
            'No need for contiguous memory allocation',
          ].map((advantage, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-600 dark:text-slate-300">{advantage}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'disadvantages',
      icon: XCircle,
      title: 'Disadvantages of Linked Lists',
      content: (
        <div className="space-y-3">
          {[
            'Random access not allowed - must traverse from head to reach a node',
            'Extra memory required for storing pointers',
            'Not cache-friendly due to non-contiguous memory allocation',
            'Reverse traversal difficult (except in doubly linked lists)',
            'More complex implementation compared to arrays',
          ].map((disadvantage, index) => (
            <div key={index} className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-600 dark:text-slate-300">{disadvantage}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'comparison',
      icon: Link2,
      title: 'Difference Between Array and Linked List',
      content: (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Array</TableHead>
                <TableHead>Linked List</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Memory Allocation</TableCell>
                <TableCell>Contiguous memory locations</TableCell>
                <TableCell>Non-contiguous memory locations</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Size</TableCell>
                <TableCell>Fixed size (static)</TableCell>
                <TableCell>Dynamic size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Access Time</TableCell>
                <TableCell>O(1) - Direct access</TableCell>
                <TableCell>O(n) - Sequential access</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Insertion/Deletion</TableCell>
                <TableCell>O(n) - Requires shifting</TableCell>
                <TableCell>O(1) - If position is known</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Memory Usage</TableCell>
                <TableCell>Less (no extra pointers)</TableCell>
                <TableCell>More (extra pointer storage)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cache Performance</TableCell>
                <TableCell>Better (locality of reference)</TableCell>
                <TableCell>Worse (scattered in memory)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Binary Search</TableCell>
                <TableCell>Possible</TableCell>
                <TableCell>Not possible</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-950 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400">Theory</span>
          </div>
          <h1 className="text-slate-900 dark:text-white mb-4">
            Linked Lists: Complete Guide
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Master the fundamentals of linked lists with comprehensive theory and examples
          </p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <AccordionItem
                  key={section.id}
                  value={section.id}
                  className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-slate-900 dark:text-white">
                        {section.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 border-t border-slate-100 dark:border-slate-700">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200 dark:border-blue-800">
            <h3 className="text-slate-900 dark:text-white mb-3">
              Ready to see it in action?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Try our interactive visualizer to understand how linked lists work
            </p>
            <a href="/visualizer">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                Open Visualizer
              </button>
            </a>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Search, RotateCcw, Play, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';

interface Node {
  value: number;
  id: string;
}

export default function VisualizerPage() {
  const [listType, setListType] = useState<'singly' | 'doubly'>('singly');
  const [nodes, setNodes] = useState<Node[]>([
    { value: 10, id: '1' },
    { value: 20, id: '2' },
    { value: 30, id: '3' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

  const insertAtStart = () => {
    if (!inputValue) {
      toast.error('Please enter a value');
      return;
    }
    const newNode: Node = {
      value: parseInt(inputValue),
      id: Date.now().toString(),
    };
    setAnimatingIndex(0);
    setTimeout(() => {
      setNodes([newNode, ...nodes]);
      setInputValue('');
      setAnimatingIndex(null);
      toast.success('Node inserted at start');
    }, 500);
  };

  const insertAtEnd = () => {
    if (!inputValue) {
      toast.error('Please enter a value');
      return;
    }
    const newNode: Node = {
      value: parseInt(inputValue),
      id: Date.now().toString(),
    };
    setAnimatingIndex(nodes.length);
    setTimeout(() => {
      setNodes([...nodes, newNode]);
      setInputValue('');
      setAnimatingIndex(null);
      toast.success('Node inserted at end');
    }, 500);
  };

  const insertAfterKey = () => {
    if (!inputValue || !searchKey) {
      toast.error('Please enter both value and key');
      return;
    }
    const index = nodes.findIndex((node) => node.value === parseInt(searchKey));
    if (index === -1) {
      toast.error('Key not found');
      return;
    }
    const newNode: Node = {
      value: parseInt(inputValue),
      id: Date.now().toString(),
    };
    setAnimatingIndex(index + 1);
    setTimeout(() => {
      const newNodes = [...nodes];
      newNodes.splice(index + 1, 0, newNode);
      setNodes(newNodes);
      setInputValue('');
      setSearchKey('');
      setAnimatingIndex(null);
      toast.success(`Node inserted after ${searchKey}`);
    }, 500);
  };

  const deleteAtStart = () => {
    if (nodes.length === 0) {
      toast.error('List is empty');
      return;
    }
    setAnimatingIndex(0);
    setTimeout(() => {
      setNodes(nodes.slice(1));
      setAnimatingIndex(null);
      toast.success('Node deleted from start');
    }, 500);
  };

  const deleteAtEnd = () => {
    if (nodes.length === 0) {
      toast.error('List is empty');
      return;
    }
    setAnimatingIndex(nodes.length - 1);
    setTimeout(() => {
      setNodes(nodes.slice(0, -1));
      setAnimatingIndex(null);
      toast.success('Node deleted from end');
    }, 500);
  };

  const deleteByKey = () => {
    if (!searchKey) {
      toast.error('Please enter a key to delete');
      return;
    }
    const index = nodes.findIndex((node) => node.value === parseInt(searchKey));
    if (index === -1) {
      toast.error('Key not found');
      return;
    }
    setAnimatingIndex(index);
    setTimeout(() => {
      setNodes(nodes.filter((node) => node.value !== parseInt(searchKey)));
      setSearchKey('');
      setAnimatingIndex(null);
      toast.success(`Node with value ${searchKey} deleted`);
    }, 500);
  };

  const searchNode = () => {
    if (!searchKey) {
      toast.error('Please enter a value to search');
      return;
    }
    const index = nodes.findIndex((node) => node.value === parseInt(searchKey));
    if (index === -1) {
      toast.error('Node not found');
      setHighlightedIndex(null);
      return;
    }
    setHighlightedIndex(index);
    toast.success(`Node found at position ${index + 1}`);
    setTimeout(() => setHighlightedIndex(null), 3000);
  };

  const reset = () => {
    setNodes([
      { value: 10, id: '1' },
      { value: 20, id: '2' },
      { value: 30, id: '3' },
    ]);
    setInputValue('');
    setSearchKey('');
    setHighlightedIndex(null);
    setAnimatingIndex(null);
    toast.success('Visualizer reset');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-950 px-4 py-2 rounded-full mb-4">
            <Play className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400">Interactive Visualizer</span>
          </div>
          <h1 className="text-slate-900 dark:text-white mb-4">
            Linked List Visualizer
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            See linked list operations in real-time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Type Selection */}
            <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <Label className="mb-3 block text-slate-900 dark:text-white">List Type</Label>
              <RadioGroup value={listType} onValueChange={(value: any) => setListType(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="singly" id="singly" />
                  <Label htmlFor="singly" className="cursor-pointer">Singly Linked List</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="doubly" id="doubly" />
                  <Label htmlFor="doubly" className="cursor-pointer">Doubly Linked List</Label>
                </div>
              </RadioGroup>
            </Card>

            {/* Input Fields */}
            <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="value" className="mb-2 block">Node Value</Label>
                  <Input
                    id="value"
                    type="number"
                    placeholder="Enter value"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="key" className="mb-2 block">Search/Delete Key</Label>
                  <Input
                    id="key"
                    type="number"
                    placeholder="Enter key"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                  />
                </div>
              </div>
            </Card>

            {/* Operations */}
            <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <h3 className="text-slate-900 dark:text-white mb-4">Operations</h3>
              <div className="space-y-2">
                <Button onClick={insertAtStart} className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Insert at Start
                </Button>
                <Button onClick={insertAtEnd} className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Insert at End
                </Button>
                <Button onClick={insertAfterKey} className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Insert After Key
                </Button>
                <Button onClick={deleteAtStart} className="w-full justify-start" variant="outline">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete at Start
                </Button>
                <Button onClick={deleteAtEnd} className="w-full justify-start" variant="outline">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete at End
                </Button>
                <Button onClick={deleteByKey} className="w-full justify-start" variant="outline">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete by Key
                </Button>
                <Button onClick={searchNode} className="w-full justify-start" variant="outline">
                  <Search className="w-4 h-4 mr-2" />
                  Search Node
                </Button>
                <Button onClick={reset} className="w-full justify-start" variant="destructive">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </Card>
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 min-h-[600px]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-slate-900 dark:text-white">
                  {listType === 'singly' ? 'Singly' : 'Doubly'} Linked List
                </h3>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Nodes: {nodes.length}
                </div>
              </div>

              {nodes.length === 0 ? (
                <div className="flex items-center justify-center h-96 text-slate-400 dark:text-slate-600">
                  List is empty. Add some nodes!
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-4 justify-center">
                  <div className="px-4 py-2 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded">
                    HEAD
                  </div>
                  <AnimatePresence mode="popLayout">
                    {nodes.map((node, index) => (
                      <React.Fragment key={node.id}>
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`relative flex items-center gap-4 ${
                            animatingIndex === index ? 'z-10' : ''
                          }`}
                        >
                          {listType === 'doubly' && index > 0 && (
                            <ChevronRight className="w-6 h-6 text-slate-400 transform rotate-180" />
                          )}
                          <div
                            className={`w-24 h-24 border-4 rounded-lg flex flex-col items-center justify-center transition-all duration-300 ${
                              highlightedIndex === index
                                ? 'border-green-500 bg-green-100 dark:bg-green-950 scale-110'
                                : animatingIndex === index
                                ? 'border-red-500 bg-red-100 dark:bg-red-950 scale-110'
                                : 'border-blue-500 bg-blue-50 dark:bg-blue-950'
                            }`}
                          >
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                              Data
                            </div>
                            <div className="text-2xl text-slate-900 dark:text-white">
                              {node.value}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              Next
                            </div>
                          </div>
                          {index < nodes.length - 1 && (
                            <ChevronRight className="w-6 h-6 text-slate-400" />
                          )}
                        </motion.div>
                      </React.Fragment>
                    ))}
                  </AnimatePresence>
                  <div className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                    NULL
                  </div>
                </div>
              )}

              {/* Legend */}
              <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">Legend:</div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-blue-500 bg-blue-50 dark:bg-blue-950 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Normal Node</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-green-500 bg-green-100 dark:bg-green-950 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Found/Highlighted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-red-500 bg-red-100 dark:bg-red-950 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Being Deleted</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

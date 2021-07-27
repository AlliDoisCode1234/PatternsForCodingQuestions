//
//
//
// Intro:
// KSQ works with cell lines (models of cancer that can be grown in the lab), to study the effect of drugs on
//   cancer cells. In many cases the cell lines are genetically modified, for example, to model the development of
//   drug resistance.


// Goal:
//   Design a system to model cell line engineering


// Requirements:
// Different types of manipulations can be applied to the cell lines, for example CRISPR editing, protein-expression, RNA-interference
// - Each modification affects a specific gene, and each modification either increases or decreases the gene's function
// - A cell line is either an un-modified ("parental") cell line, or it is derived from another cell line
// - A cell line can be stored in vials, and each vial has a unique ID



// Here are a few methods your design should cover
// - Derive a modified cell line from a parent cell line and a list of modifications
// - Create a specified number of new vials of a cell line
// - List all the modifications that have been made to a cell line or any of the cell lines it was derived from
// - Count the number of samples available for a particular cell line
// - Count the number of cell lines that have been derived from a given cell line
// - For a given cell line, get a reference to the original (un-modified) parental cell line


// NAME    | INDEX1 | INDEX2

// ----------------------

// sample1 | ATGC   |

// sample2 | TCAG   | GTCG

// sample3 |        | TCAG





// Derive a modified cell line from a parent cell line and a list of modifications
// As child cell, take parent cell line, list all possible mods

// Specified # of new vials of a cell line

// List all the mods that have been made to a cell line or ay of the cell lines it was derived from

// Count the number of samples available for a particular cell line

// Count the number of cell lines that have been derived from a give cell line

// For a given cell line, get a reference to the original (un-modified) parental cell line
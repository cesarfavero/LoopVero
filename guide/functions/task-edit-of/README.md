# `taskEditOf`

[Componente: tasks](../../components/tasks/README.md) · [Índice](../../README.md)

**Fonte primária:** [host-main.cjs:739484-739505](../../../reference/runtime/host-main.cjs#L739484-L739505). Análise estática do snapshot original; nomes preservados do bundle.

## Contrato

`taskEditOf(args)` converte os argumentos públicos de UpdateTask em uma união interna de três formatos. É uma função pura, sem escrita ou rede.

| Seleção | Saída |
| --- | --- |
| Nome, descrição, status, subagents ou body | `{kind:"fields",fields}` |
| Documento completo em content | `{kind:"rewrite",content}` |
| old_string e/ou new_string | `{kind:"replace",oldString,newString}` |

## Validação real

A função calcula se cada categoria está presente e exige exatamente uma. Passar body e content ao mesmo tempo falha. Não passar edição também falha. Valores omitidos não entram no objeto fields.

Há uma diferença entre contrato textual e implementação deste helper: a descrição pede o par old_string/new_string e uma ocorrência única, mas o helper sozinho aceita um dos lados ausente e o transforma em string vazia. A validação de ocorrência e a eventual recusa de busca vazia pertencem à aplicação documental abaixo da porta.

## Resultado de engenharia

Uma reconstrução fiel não deve atribuir a essa função locks, verificação de versão ou busca no documento. Ela só seleciona a operação. Esses comportamentos precisam ser implementados e testados na camada documental quando sua fonte for localizada.

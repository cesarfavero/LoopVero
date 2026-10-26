# `stripMemoryContextBlocks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702727-702729](../../../../../../reference/runtime/host-main.cjs#L702727-L702729) | `FunctionDeclaration` | não | `text3` |
| [evaluation:536460-536462](../../../../../../reference/runtime/sand-eval-runner.cjs#L536460-L536462) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702727-702729](../../../../../../reference/runtime/host-main.cjs#L702727-L702729) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536460-536462](../../../../../../reference/runtime/sand-eval-runner.cjs#L536460-L536462) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702727

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `text3.replace`.

SHA-256 do trecho: `3998ecc113662a0479fed6889f6aa6c8127c0d8f5f8f4c201e1c8d266ec33811`.

### evaluation:536460

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `text3.replace`.

SHA-256 do trecho: `3998ecc113662a0479fed6889f6aa6c8127c0d8f5f8f4c201e1c8d266ec33811`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

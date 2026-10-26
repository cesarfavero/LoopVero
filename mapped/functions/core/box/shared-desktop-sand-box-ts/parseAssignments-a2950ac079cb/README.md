# `parseAssignments`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554319-554358](../../../../../../reference/runtime/host-main.cjs#L554319-L554358) | `FunctionDeclaration` | não | `bytes, { keepDuplicateForks = false } = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554319-554358](../../../../../../reference/runtime/host-main.cjs#L554319-L554358) | 10 | 2 | 0 | 4 | 0 | 1 |

### host:554319

Chamadas escritas diretamente neste corpo: `.decode`, `.sort`, `JSON.parse`, `Number.isInteger`, `Object.keys`, `assignments.set`, `isUnknownRecord2`, `new Map`, `new Set`, `new TextDecoder`, `tokens.set`, `tokens.values`, `unstarted.set`, `usedForks.add`, `usedForks.has`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `4fe681afbdbef0e91de3b197ab2b0e3d14421dec7df20236dd31d2d540525268`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

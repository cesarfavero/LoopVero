# `runStopWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554013-554019](../../../../../../reference/runtime/host-main.cjs#L554013-L554019) | `FunctionDeclaration` | sim | `ctx, accessor, windowIndex, ownerToken, opts = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554013-554019](../../../../../../reference/runtime/host-main.cjs#L554013-L554019) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:554013

Chamadas escritas diretamente neste corpo: `runWindowScript`.

SHA-256 do trecho: `2a500a65b345e8b758f26967bd4accdfb0152d4ac955937e8f502b67f79cdce9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

# `clampBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/sand-text.ts` · [README do módulo](../../../../modules/shared/sand-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:227870-227872](../../../../../reference/runtime/host-main.cjs#L227870-L227872) | `FunctionDeclaration` | não | `raw, maxLength` |
| [evaluation:474406-474408](../../../../../reference/runtime/sand-eval-runner.cjs#L474406-L474408) | `FunctionDeclaration` | não | `raw, maxLength` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:227870-227872](../../../../../reference/runtime/host-main.cjs#L227870-L227872) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474406-474408](../../../../../reference/runtime/sand-eval-runner.cjs#L474406-L474408) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:227870

Chamadas escritas diretamente neste corpo: `.slice`, `raw.trim`.

SHA-256 do trecho: `eee68d58dc79e2d6f012faf118e7f88d7ebb7bc27c53e468151cf32bf9afd48c`.

### evaluation:474406

Chamadas escritas diretamente neste corpo: `.slice`, `raw.trim`.

SHA-256 do trecho: `eee68d58dc79e2d6f012faf118e7f88d7ebb7bc27c53e468151cf32bf9afd48c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

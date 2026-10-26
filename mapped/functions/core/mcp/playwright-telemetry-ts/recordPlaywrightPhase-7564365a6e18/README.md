# `recordPlaywrightPhase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700609-700612](../../../../../../reference/runtime/host-main.cjs#L700609-L700612) | `FunctionDeclaration` | não | `ctx, args` |
| [evaluation:514401-514404](../../../../../../reference/runtime/sand-eval-runner.cjs#L514401-L514404) | `FunctionDeclaration` | não | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700609-700612](../../../../../../reference/runtime/host-main.cjs#L700609-L700612) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:514401-514404](../../../../../../reference/runtime/sand-eval-runner.cjs#L514401-L514404) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:700609

Chamadas escritas diretamente neste corpo: `phases.histogram`, `toolLabel`.

SHA-256 do trecho: `a772b962188a3b7c40b990be57ee471d4b93196f7e8e08d98945af0096b6abf2`.

### evaluation:514401

Chamadas escritas diretamente neste corpo: `phases.histogram`, `toolLabel`.

SHA-256 do trecho: `a772b962188a3b7c40b990be57ee471d4b93196f7e8e08d98945af0096b6abf2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

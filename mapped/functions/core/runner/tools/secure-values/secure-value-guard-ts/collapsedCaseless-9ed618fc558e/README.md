# `collapsedCaseless`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-value-guard.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767591-767593](../../../../../../../../reference/runtime/host-main.cjs#L767591-L767593) | `FunctionDeclaration` | não | `text3` |
| [evaluation:563108-563110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563108-L563110) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767591-767593](../../../../../../../../reference/runtime/host-main.cjs#L767591-L767593) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563108-563110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563108-L563110) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767591

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `text3.trim`.

SHA-256 do trecho: `0a9f14b49e0e084cdf5e58dcd5d019b7b60fee676862310892caf9fb71af7fa9`.

### evaluation:563108

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `text3.trim`.

SHA-256 do trecho: `0a9f14b49e0e084cdf5e58dcd5d019b7b60fee676862310892caf9fb71af7fa9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).

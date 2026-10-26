# `scmWriteBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-write-gate.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-write-gate-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585868-585877](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585868-L585877) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585868-585877](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585868-L585877) | 4 | 0 | 2 | 4 | 0 | 0 |

### evaluation:585868

Chamadas escritas diretamente neste corpo: `.find`, `args.blockedReason`, `args.tools`, `cursorScmProviderForMcpServerIdentifier`, `isDeclaredReadOnlyMcpTool`.

SHA-256 do trecho: `d2a73c7428dbb3605403448c64cbad6b8bd53abc7d50f844323e91b89143dfda`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

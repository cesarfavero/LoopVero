# `groupReasons`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756541-756550](../../../../../../../reference/runtime/host-main.cjs#L756541-L756550) | `FunctionDeclaration` | não | `groups` |
| [evaluation:542461-542470](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542461-L542470) | `FunctionDeclaration` | não | `groups` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756541-756550](../../../../../../../reference/runtime/host-main.cjs#L756541-L756550) | 2 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:542461-542470](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542461-L542470) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:756541

Chamadas escritas diretamente neste corpo: `GROUP_TOOLS.get`, `Object.entries`, `new Map`, `reasons.has`, `reasons.set`.

SHA-256 do trecho: `d34055c11769cc2519289f246730b8336d0d05d6c54e3c7b9c5906eebb53fe15`.

### evaluation:542461

Chamadas escritas diretamente neste corpo: `GROUP_TOOLS.get`, `Object.entries`, `new Map`, `reasons.has`, `reasons.set`.

SHA-256 do trecho: `d34055c11769cc2519289f246730b8336d0d05d6c54e3c7b9c5906eebb53fe15`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

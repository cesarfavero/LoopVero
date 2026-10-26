# `serializeStoredAutomationRuns`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716612-716615](../../../../../../reference/runtime/host-main.cjs#L716612-L716615) | `FunctionDeclaration` | não | `runs` |
| [evaluation:627326-627329](../../../../../../reference/runtime/sand-eval-runner.cjs#L627326-L627329) | `FunctionDeclaration` | não | `runs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716612-716615](../../../../../../reference/runtime/host-main.cjs#L716612-L716615) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627326-627329](../../../../../../reference/runtime/sand-eval-runner.cjs#L627326-L627329) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716612

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `72c9055654533ae96998f29fdef015f3039d7c21041ff43b64f33821fb71cad6`.

### evaluation:627326

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `72c9055654533ae96998f29fdef015f3039d7c21041ff43b64f33821fb71cad6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

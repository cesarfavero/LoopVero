# `parseStoredConfigTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716464-716471](../../../../../../reference/runtime/host-main.cjs#L716464-L716471) | `FunctionDeclaration` | não | `parsed2` |
| [evaluation:627178-627185](../../../../../../reference/runtime/sand-eval-runner.cjs#L627178-L627185) | `FunctionDeclaration` | não | `parsed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716464-716471](../../../../../../reference/runtime/host-main.cjs#L716464-L716471) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627178-627185](../../../../../../reference/runtime/sand-eval-runner.cjs#L627178-L627185) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:716464

Chamadas escritas diretamente neste corpo: `cronTrigger`, `isTriggerParseFailure`, `normalizeSchedule`, `parseStoredTrigger`.

SHA-256 do trecho: `0e0b3fafdf076a36a00798663f81a6bf71c9d7fb8c18bdd2e63cdd965e3fd636`.

### evaluation:627178

Chamadas escritas diretamente neste corpo: `cronTrigger`, `isTriggerParseFailure`, `normalizeSchedule`, `parseStoredTrigger`.

SHA-256 do trecho: `0cfe8d9b33a474a014ec82dad2d38fb48639a2a5d0d5b990207a87fe640cc4ce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

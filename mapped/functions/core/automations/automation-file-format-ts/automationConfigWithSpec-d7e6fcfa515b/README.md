# `automationConfigWithSpec`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716664-716680](../../../../../../reference/runtime/host-main.cjs#L716664-L716680) | `FunctionDeclaration` | não | `config2, spec, provenance, minimumIntervalMs` |
| [evaluation:627378-627394](../../../../../../reference/runtime/sand-eval-runner.cjs#L627378-L627394) | `FunctionDeclaration` | não | `config2, spec, provenance, minimumIntervalMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716664-716680](../../../../../../reference/runtime/host-main.cjs#L716664-L716680) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627378-627394](../../../../../../reference/runtime/sand-eval-runner.cjs#L627378-L627394) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:716664

Chamadas escritas diretamente neste corpo: `clampAutomationName`, `normalizeAutomationPrompt`, `normalizeAutomationSpecTrigger`.

SHA-256 do trecho: `928c9dd23555178ab69404aab47bc51e808149a6d56da012e0454041e9a018a9`.

### evaluation:627378

Chamadas escritas diretamente neste corpo: `clampAutomationName`, `normalizeAutomationPrompt`, `normalizeAutomationSpecTrigger`.

SHA-256 do trecho: `d0bdf8095112f3d1d45738ebe28b52f8ae6da1b1f2bbe56208b61db4cf21d522`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

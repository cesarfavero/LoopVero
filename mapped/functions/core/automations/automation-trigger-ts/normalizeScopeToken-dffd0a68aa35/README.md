# `normalizeScopeToken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716009-716013](../../../../../../reference/runtime/host-main.cjs#L716009-L716013) | `FunctionDeclaration` | não | `raw, maxLength` |
| [evaluation:527692-527696](../../../../../../reference/runtime/sand-eval-runner.cjs#L527692-L527696) | `FunctionDeclaration` | não | `raw, maxLength` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716009-716013](../../../../../../reference/runtime/host-main.cjs#L716009-L716013) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:527692-527696](../../../../../../reference/runtime/sand-eval-runner.cjs#L527692-L527696) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:716009

Chamadas escritas diretamente neste corpo: `clampLine`.

SHA-256 do trecho: `c110129423ea6ace593250f37421090f00c2a0e17e56c6bced1673f991a05fbd`.

### evaluation:527692

Chamadas escritas diretamente neste corpo: `clampLine`.

SHA-256 do trecho: `c110129423ea6ace593250f37421090f00c2a0e17e56c6bced1673f991a05fbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

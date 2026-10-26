# `listenerPlatformsInTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/listener-integrations.ts` · [README do módulo](../../../../../modules/core/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505161-505167](../../../../../../reference/runtime/host-main.cjs#L505161-L505167) | `FunctionDeclaration` | não | `trigger2` |
| [evaluation:570010-570016](../../../../../../reference/runtime/sand-eval-runner.cjs#L570010-L570016) | `FunctionDeclaration` | não | `trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505161-505167](../../../../../../reference/runtime/host-main.cjs#L505161-L505167) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:570010-570016](../../../../../../reference/runtime/sand-eval-runner.cjs#L570010-L570016) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:505161

Chamadas escritas diretamente neste corpo: `isListenerPlatform`, `new Set`, `platforms.add`, `triggerListeners`.

SHA-256 do trecho: `4af6c59f3279c1930b892c0d2a6d15d1b6f7da05c092e74b14ad1403798239f8`.

### evaluation:570010

Chamadas escritas diretamente neste corpo: `isListenerPlatform`, `new Set`, `platforms.add`, `triggerListeners`.

SHA-256 do trecho: `4e370064878cabc2bace3ad7fc2152c3b343e56e20967ba449d684d15854472a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

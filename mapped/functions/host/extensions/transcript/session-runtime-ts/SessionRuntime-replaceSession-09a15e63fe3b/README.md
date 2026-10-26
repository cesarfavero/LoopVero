# `SessionRuntime.replaceSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738303-738308](../../../../../../../reference/runtime/host-main.cjs#L738303-L738308) | `method` | sim | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738303-738308](../../../../../../../reference/runtime/host-main.cjs#L738303-L738308) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:738303

Chamadas escritas diretamente neste corpo: `this.setActiveSession`, `this.tm.runLifecycle.retireSession`, `this.tm.runLifecycle.watchActiveSession`.

SHA-256 do trecho: `533b96cada486d962aa40d9873c0dec49cb7ab07a7fd279a116cfdb083bf5308`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

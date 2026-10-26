# `CloudAgentUpdatesStream.connectOnce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-updates-stream.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-updates-stream-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:537670-537700](../../../../../../../reference/runtime/host-main.cjs#L537670-L537700) | `method` | sim | `parent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537670-537700](../../../../../../../reference/runtime/host-main.cjs#L537670-L537700) | 4 | 1 | 0 | 3 | 0 | 1 |

### host:537670

Chamadas escritas diretamente neste corpo: `.streamBackgroundComposerUpdates`, `connection.abort`, `errorClassOf2`, `idle.dispose`, `idle.kick`, `new AbortController`, `new StreamBackgroundComposerUpdatesRequest`, `parent.addEventListener`, `parent.removeEventListener`, `this.ingest`, `this.noteLive`, `this.options.getClient`, `this.options.isEnabled`, `this.watchdog.arm`.

SHA-256 do trecho: `984406545056daf8cee03775ed58c4c2a50b78aaef17585029a3ac0552742507`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

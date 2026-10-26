# `SandAgentSessionStore.markSessionViewed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723452-723455](../../../../../../../reference/runtime/host-main.cjs#L723452-L723455) | `method` | sim | `session, at3 = Date.now(), options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723452-723455](../../../../../../../reference/runtime/host-main.cjs#L723452-L723455) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:723452

Chamadas escritas diretamente neste corpo: `session.db.markViewed`, `this.seedSessionActivityFromDbMtime`.

SHA-256 do trecho: `357f44d423fc8ae7474ff472db34bce62c97a0866c98dd87e369487eeb4f6da5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

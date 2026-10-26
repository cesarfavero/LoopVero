# `SandAgentSessionStore.createSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723146-723148](../../../../../../../reference/runtime/host-main.cjs#L723146-L723148) | `method` | sim | `profile, origin = "user", options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723146-723148](../../../../../../../reference/runtime/host-main.cjs#L723146-L723148) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723146

Chamadas escritas diretamente neste corpo: `this.materialization.createSession`.

SHA-256 do trecho: `b50b2a3f41faf922cbf04abae45b4d766bb907d59677c1a7a7f4a7415df33325`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

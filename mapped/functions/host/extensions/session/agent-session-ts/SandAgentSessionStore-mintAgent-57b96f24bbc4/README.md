# `SandAgentSessionStore.mintAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723143-723145](../../../../../../../reference/runtime/host-main.cjs#L723143-L723145) | `method` | sim | `mint2, providedId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723143-723145](../../../../../../../reference/runtime/host-main.cjs#L723143-L723145) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723143

Chamadas escritas diretamente neste corpo: `this.materialization.mintAgent`.

SHA-256 do trecho: `f4f0ab562e4c1b3f85a80f01933b33689837e9b18041864f349a46087ef0fcc4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

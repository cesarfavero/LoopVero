# `IdleDestroyingHttpsAgent.createConnection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/idle-destroying-agent.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/idle-destroying-agent-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714147-714149](../../../../../../../reference/runtime/host-main.cjs#L714147-L714149) | `method` | não | `options2, callback` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714147-714149](../../../../../../../reference/runtime/host-main.cjs#L714147-L714149) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714147

Chamadas escritas diretamente neste corpo: `destroyOnIdle`, `super.createConnection`.

SHA-256 do trecho: `d0183714526f95e4575d831998dba2124ae68e9e75c7db1bd992451b716685c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

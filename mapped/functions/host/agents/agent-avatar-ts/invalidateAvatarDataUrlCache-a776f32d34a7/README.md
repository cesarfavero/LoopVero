# `invalidateAvatarDataUrlCache`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/agent-avatar.ts` · [README do módulo](../../../../../modules/host/agents/agent-avatar-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716864-716869](../../../../../../reference/runtime/host-main.cjs#L716864-L716869) | `FunctionDeclaration` | não | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716864-716869](../../../../../../reference/runtime/host-main.cjs#L716864-L716869) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:716864

Chamadas escritas diretamente neste corpo: `avatarDataUrlCache.delete`, `avatarDataUrlCache.keys`, `key.startsWith`.

SHA-256 do trecho: `734e949d564df7b49decede799907b008908d2210a6b5b4750e5670ea3101767`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

# `assertSandProfileNotLinked`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/agent-profile.ts` · [README do módulo](../../../../../modules/host/agents/agent-profile-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491618-491621](../../../../../../reference/runtime/host-main.cjs#L491618-L491621) | `FunctionDeclaration` | não | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491618-491621](../../../../../../reference/runtime/host-main.cjs#L491618-L491621) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:491618

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `openNoFollowSync2`, `sandDataNoFollowRoot`.

SHA-256 do trecho: `8af2697e9ab1719d37050c8d093157dcb632ca09dbf8c95a063cf5c70abc9837`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

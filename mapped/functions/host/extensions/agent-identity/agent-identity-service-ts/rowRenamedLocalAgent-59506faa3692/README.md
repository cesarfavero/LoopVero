# `rowRenamedLocalAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495095-495099](../../../../../../../reference/runtime/host-main.cjs#L495095-L495099) | `FunctionDeclaration` | não | `agent, local` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495095-495099](../../../../../../../reference/runtime/host-main.cjs#L495095-L495099) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:495095

Chamadas escritas diretamente neste corpo: `agent.name.trim`, `local.name.trim`.

SHA-256 do trecho: `6a92dc556e20cf5bc6d5c9eae603185acb3f4705af9f1777499502324ebce9fe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

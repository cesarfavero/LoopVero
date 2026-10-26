# `HostMcpAuthCompletion.resolveDesktop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/mcp-auth/host-mcp-auth-completion.ts` · [README do módulo](../../../../../modules/host/mcp-auth/host-mcp-auth-completion-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786346-786352](../../../../../../reference/runtime/host-main.cjs#L786346-L786352) | `method` | sim | `completion` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786346-786352](../../../../../../reference/runtime/host-main.cjs#L786346-L786352) | 0 | 0 | 1 | 0 | 0 | 1 |

### host:786346

Chamadas escritas diretamente neste corpo: `.management.restart`, `this.deps.getMcp`, `this.resolve`.

SHA-256 do trecho: `730df7d2ae9dced44a8e735a1830de35af6c62ba8dc841ef4a0667828dab8101`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

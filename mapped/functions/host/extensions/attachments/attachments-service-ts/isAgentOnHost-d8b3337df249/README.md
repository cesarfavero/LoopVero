# `isAgentOnHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498552-498560](../../../../../../../reference/runtime/host-main.cjs#L498552-L498560) | `FunctionDeclaration` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498552-498560](../../../../../../../reference/runtime/host-main.cjs#L498552-L498560) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:498552

Chamadas escritas diretamente neste corpo: `.isDirectory`, `import_node_fs43.promises.stat`, `reportFallbackUnlessAbsent`, `resolveSandAgentDir`.

SHA-256 do trecho: `cbb8e8b6f1a892bc4bd94a473973f542600f23a3d17cee57927270ea53a6372d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

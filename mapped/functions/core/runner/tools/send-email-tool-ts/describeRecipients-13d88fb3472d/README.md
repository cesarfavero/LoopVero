# `describeRecipients`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-email-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764351-764356](../../../../../../../reference/runtime/host-main.cjs#L764351-L764356) | `FunctionDeclaration` | não | `to3, cc, bcc` |
| [evaluation:557719-557724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557719-L557724) | `FunctionDeclaration` | não | `to3, cc, bcc` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764351-764356](../../../../../../../reference/runtime/host-main.cjs#L764351-L764356) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557719-557724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557719-L557724) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:764351

Chamadas escritas diretamente neste corpo: `bcc.join`, `cc.join`, `parts.join`, `parts.push`, `to3.join`.

SHA-256 do trecho: `8afecb414b912ddb91ec032bdae89a7cabb51822e8810ea96db12d74ae335078`.

### evaluation:557719

Chamadas escritas diretamente neste corpo: `bcc.join`, `cc.join`, `parts.join`, `parts.push`, `to3.join`.

SHA-256 do trecho: `8afecb414b912ddb91ec032bdae89a7cabb51822e8810ea96db12d74ae335078`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

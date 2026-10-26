# `findConnectorServedOn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/tool-calls.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:539184-539189](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539184-L539189) | `FunctionDeclaration` | não | `connectors, serverHost, accepts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539184-539189](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539184-L539189) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539184

Chamadas escritas diretamente neste corpo: `connectors.find`, `host.split`, `serverHost.toLowerCase`.

SHA-256 do trecho: `f1a546f7491549afabeff6e47c8896154f7bf02c549145c8d8d26fc8eabb3f6f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

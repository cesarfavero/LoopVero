# `findExternalSendConnector`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/tool-calls.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:539177-539183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539177-L539183) | `FunctionDeclaration` | não | `connectors, serverHost, toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539177-539183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539177-L539183) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539177

Chamadas escritas diretamente neste corpo: `findConnectorServedOn`.

SHA-256 do trecho: `42765728666653533e1711bf18245a22d28221fb007714db793af59c33479260`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

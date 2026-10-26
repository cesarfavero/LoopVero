# `hasChannelReadMcpTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/channel/channel-read-tools-gate.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/channel/channel-read-tools-gate-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768155-768157](../../../../../../../../reference/runtime/host-main.cjs#L768155-L768157) | `FunctionDeclaration` | não | `spec, mcpTools` |
| [evaluation:563671-563673](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563671-L563673) | `FunctionDeclaration` | não | `spec, mcpTools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768155-768157](../../../../../../../../reference/runtime/host-main.cjs#L768155-L768157) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563671-563673](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563671-L563673) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768155

Chamadas escritas diretamente neste corpo: `mcpTools.some`.

SHA-256 do trecho: `f5656c4f4c3d612b5e4eb78b1fb957809d07fd51aea221d67acdf1afbe9fc188`.

### evaluation:563671

Chamadas escritas diretamente neste corpo: `mcpTools.some`.

SHA-256 do trecho: `f5656c4f4c3d612b5e4eb78b1fb957809d07fd51aea221d67acdf1afbe9fc188`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).

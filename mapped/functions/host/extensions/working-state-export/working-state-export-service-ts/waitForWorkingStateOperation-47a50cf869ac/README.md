# `waitForWorkingStateOperation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-export-service.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785405-785426](../../../../../../../reference/runtime/host-main.cjs#L785405-L785426) | `FunctionDeclaration` | sim | `startOperation, control` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785405-785426](../../../../../../../reference/runtime/host-main.cjs#L785405-L785426) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:785405

Chamadas escritas diretamente neste corpo: `control.onProgress`, `control.signal.throwIfAborted`, `new Promise`, `startOperation`.

SHA-256 do trecho: `ce65cbc638edeb441f13afa71fe18e56616d7884632067d99b73701eca2a26ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

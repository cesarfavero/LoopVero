# `folderLabel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-publish-proposals.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-publish-proposals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509409-509414](../../../../../../reference/runtime/host-main.cjs#L509409-L509414) | `FunctionDeclaration` | não | `projectDir` |
| [evaluation:490309-490314](../../../../../../reference/runtime/sand-eval-runner.cjs#L490309-L490314) | `FunctionDeclaration` | não | `projectDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509409-509414](../../../../../../reference/runtime/host-main.cjs#L509409-L509414) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:490309-490314](../../../../../../reference/runtime/sand-eval-runner.cjs#L490309-L490314) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:509409

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `plain.slice`, `projectDir.replace`.

SHA-256 do trecho: `5b277d8b01e5164b2dc7006f1f363ffa50620d466e532f7b93db96d0082c5dac`.

### evaluation:490309

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `plain.slice`, `projectDir.replace`.

SHA-256 do trecho: `5b277d8b01e5164b2dc7006f1f363ffa50620d466e532f7b93db96d0082c5dac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

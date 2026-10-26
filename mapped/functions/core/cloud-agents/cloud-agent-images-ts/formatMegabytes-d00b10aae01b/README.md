# `formatMegabytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-images.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770108-770110](../../../../../../reference/runtime/host-main.cjs#L770108-L770110) | `FunctionDeclaration` | não | `bytes` |
| [evaluation:567272-567274](../../../../../../reference/runtime/sand-eval-runner.cjs#L567272-L567274) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770108-770110](../../../../../../reference/runtime/host-main.cjs#L770108-L770110) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:567272-567274](../../../../../../reference/runtime/sand-eval-runner.cjs#L567272-L567274) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770108

Chamadas escritas diretamente neste corpo: `Math.round`.

SHA-256 do trecho: `380d03c519ccfd5ad752981916ade8507d1a3019b3cfa9ab656bee0d465db7c5`.

### evaluation:567272

Chamadas escritas diretamente neste corpo: `Math.round`.

SHA-256 do trecho: `380d03c519ccfd5ad752981916ade8507d1a3019b3cfa9ab656bee0d465db7c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

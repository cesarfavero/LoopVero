# `startsWith2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-attachment-guard.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584298-584301](../../../../../../reference/runtime/sand-eval-runner.cjs#L584298-L584301) | `FunctionDeclaration` | não | `bytes, prefix, offset2 = 0` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584298-584301](../../../../../../reference/runtime/sand-eval-runner.cjs#L584298-L584301) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584298

Chamadas escritas diretamente neste corpo: `.equals`, `Buffer.from`, `bytes.subarray`.

SHA-256 do trecho: `e023de0e1f48e8be4a2ca1dc2aa3f64e75eb94c1d330f393f564ae42ff15c114`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

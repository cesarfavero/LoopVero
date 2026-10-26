# `rewriteMcpSuccessText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/large-output-spill.ts` · [README do módulo](../../../../../modules/core/runner/large-output-spill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742933-742935](../../../../../../reference/runtime/host-main.cjs#L742933-L742935) | `FunctionDeclaration` | não | `success2, rewrite` |
| [evaluation:515705-515707](../../../../../../reference/runtime/sand-eval-runner.cjs#L515705-L515707) | `FunctionDeclaration` | não | `success2, rewrite` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742933-742935](../../../../../../reference/runtime/host-main.cjs#L742933-L742935) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515705-515707](../../../../../../reference/runtime/sand-eval-runner.cjs#L515705-L515707) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:742933

Chamadas escritas diretamente neste corpo: `rewriteMcpText`.

SHA-256 do trecho: `31d04c0e01cfc41d56a4d647327d67734a3f7f705acd40f18476e3375e37a3d5`.

### evaluation:515705

Chamadas escritas diretamente neste corpo: `rewriteMcpText`.

SHA-256 do trecho: `31d04c0e01cfc41d56a4d647327d67734a3f7f705acd40f18476e3375e37a3d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

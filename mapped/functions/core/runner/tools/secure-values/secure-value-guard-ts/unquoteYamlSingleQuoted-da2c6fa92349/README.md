# `unquoteYamlSingleQuoted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-value-guard.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767607-767609](../../../../../../../../reference/runtime/host-main.cjs#L767607-L767609) | `FunctionDeclaration` | não | `key` |
| [evaluation:563124-563126](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563124-L563126) | `FunctionDeclaration` | não | `key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767607-767609](../../../../../../../../reference/runtime/host-main.cjs#L767607-L767609) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563124-563126](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563124-L563126) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767607

Chamadas escritas diretamente neste corpo: `key.replaceAll`.

SHA-256 do trecho: `c9385cd023852a5b1a723216cd88f4df3b851f13e6e66711f18d016bbe0f5d8c`.

### evaluation:563124

Chamadas escritas diretamente neste corpo: `key.replaceAll`.

SHA-256 do trecho: `c9385cd023852a5b1a723216cd88f4df3b851f13e6e66711f18d016bbe0f5d8c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).

# `parseSlackMessageUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774137-774143](../../../../../../reference/runtime/host-main.cjs#L774137-L774143) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573352-573358](../../../../../../reference/runtime/sand-eval-runner.cjs#L573352-L573358) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774137-774143](../../../../../../reference/runtime/host-main.cjs#L774137-L774143) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573352-573358](../../../../../../reference/runtime/sand-eval-runner.cjs#L573352-L573358) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:774137

Chamadas escritas diretamente neste corpo: `/^p\d{16}$/.test`, `matching`, `segmentsOf`.

SHA-256 do trecho: `57ef9a5f1a8c1f30f67223804559bea3a4311ba846584ca1edcd2f57dc57ca98`.

### evaluation:573352

Chamadas escritas diretamente neste corpo: `/^p\d{16}$/.test`, `matching`, `segmentsOf`.

SHA-256 do trecho: `57ef9a5f1a8c1f30f67223804559bea3a4311ba846584ca1edcd2f57dc57ca98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

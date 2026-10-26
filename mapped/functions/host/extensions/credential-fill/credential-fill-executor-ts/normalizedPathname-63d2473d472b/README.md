# `normalizedPathname`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-executor.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:544227-544235](../../../../../../../reference/runtime/host-main.cjs#L544227-L544235) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:544227-544235](../../../../../../../reference/runtime/host-main.cjs#L544227-L544235) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:544227

Chamadas escritas diretamente neste corpo: `new URL`, `raw.startsWith`, `url2.pathname.replace`.

SHA-256 do trecho: `abab863c58b1c44e44bc8113bbf9196932eaf1fa95534c953c6a2a950ad44c59`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

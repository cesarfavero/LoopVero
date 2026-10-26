# `resolveProjectDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/local-exec-sand-box.ts` · [README do módulo](../../../../../modules/host/box/local-exec-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:626997-627000](../../../../../../reference/runtime/sand-eval-runner.cjs#L626997-L627000) | `FunctionDeclaration` | não | `override` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:626997-627000](../../../../../../reference/runtime/sand-eval-runner.cjs#L626997-L627000) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:626997

Chamadas escritas diretamente neste corpo: `override.trim`.

SHA-256 do trecho: `cd20a29f686b17aa60768d1ffb389f221f3540cf044a02f5dc9b9b3a406386cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

# `attachmentExtension`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/attachment-open-policy.ts` · [README do módulo](../../../../../modules/shared/media/attachment-open-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497084-497090](../../../../../../reference/runtime/host-main.cjs#L497084-L497090) | `FunctionDeclaration` | não | `nameOrPath` |
| [evaluation:480621-480627](../../../../../../reference/runtime/sand-eval-runner.cjs#L480621-L480627) | `FunctionDeclaration` | não | `nameOrPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497084-497090](../../../../../../reference/runtime/host-main.cjs#L497084-L497090) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:480621-480627](../../../../../../reference/runtime/sand-eval-runner.cjs#L480621-L480627) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:497084

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `base.lastIndexOf`, `base.slice`, `nameOrPath.split`.

SHA-256 do trecho: `aeb74c309a4bef8d4369859f23e4b5cedf136b3559d641cd383ab6502f4e850d`.

### evaluation:480621

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `base.lastIndexOf`, `base.slice`, `nameOrPath.split`.

SHA-256 do trecho: `aeb74c309a4bef8d4369859f23e4b5cedf136b3559d641cd383ab6502f4e850d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
